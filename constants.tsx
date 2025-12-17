import { ModelComponentType, ComponentDetail, CurriculumStage } from './types';
import { Layers, Zap, Scale, Brain, ArrowRight, Activity } from 'lucide-react';

export const COMPONENT_DETAILS: Record<ModelComponentType, ComponentDetail> = {
  [ModelComponentType.INPUT]: {
    id: ModelComponentType.INPUT,
    title: "Aggregated Inputs",
    description: "Historical data is pre-processed into three distinct depth groups before entering the model.",
    technicalDetails: [
      "Shallow Group: 0-5cm, 5cm",
      "Mid Group: 20cm, 50cm",
      "Deep Group: 100cm, 150cm",
      "Drivers: Air Temp, Precip, Wind, Humidity, Sine/Cosine Time encodings"
    ],
    extendedDescription: "The input module handles the crucial task of data harmonization. Soil moisture sensors at different depths (5cm, 20cm, 50cm, 100cm) often have different noise characteristics and missing value patterns. We employ an IterativeImputer to handle gaps. Feature engineering includes cyclically encoding the 'Day of Year' using sine and cosine transforms to preserve seasonality continuity. The variables are then grouped by physical depth proximity to feed the specific streams of the Triple-Stream Encoder.",
    iconName: "Layers"
  },
  [ModelComponentType.TRIPLE_STREAM]: {
    id: ModelComponentType.TRIPLE_STREAM,
    title: "Triple-Stream Encoder",
    description: "Three parallel BiLSTMs process different soil depths independently, allowing the model to learn depth-specific dynamics.",
    technicalDetails: [
      "Layer: Bidirectional LSTM",
      "Units: 128 per stream",
      "Input Slicing: Lambda layers route specific features to specific streams",
      "Noise: Gaussian Noise (0.02) added for robustness"
    ],
    extendedDescription: "Standard RNNs often struggle to differentiate the rapid response of surface soil (reaction to rain) from the slow, damped response of deep soil (groundwater interaction). By splitting the architecture into three parallel BiLSTM streams, we force the model to learn distinct hidden representations for the Shallow, Mid, and Deep zones. Gaussian noise is injected during training to simulate sensor error, preventing the model from overfitting to specific sensor idiosyncrasies.",
    iconName: "Activity"
  },
  [ModelComponentType.ATTENTION]: {
    id: ModelComponentType.ATTENTION,
    title: "Cross-Depth Attention",
    description: "A Multi-Head Attention mechanism allows the deep soil layers to 'attend' to surface conditions and vice-versa before forecasting.",
    technicalDetails: [
      "Heads: 2",
      "Query/Key/Value: Stacked states from Shallow, Mid, and Deep streams",
      "Fusion: Concatenates attention output with raw stream states",
      "Purpose: Captures vertical hydraulic conductivity and lag effects"
    ],
    extendedDescription: "Hydraulic conductivity describes how water moves through soil pores. This is a non-linear, time-lagged process. We implement Scaled Dot-Product Attention where the 'Deep' stream queries the 'Shallow' stream's history. This allows the model to mathematically 'look back' at previous surface precipitation events to predict when that water will reach the 100cm depth. The multi-head design allows it to attend to different lag periods simultaneously.",
    iconName: "Brain"
  },
  [ModelComponentType.DECODER]: {
    id: ModelComponentType.DECODER,
    title: "Future-Aware Decoder",
    description: "The decoder uses the fused state context and combines it with known future weather drivers to generate forecasts.",
    technicalDetails: [
      "Structure: RepeatVector -> Concatenate(Context, Future Drivers)",
      "Layer: LSTM (128 units) -> TimeDistributed Dense",
      "Horizon: Variable (24h, 72h, 168h)"
    ],
    extendedDescription: "Unlike a standard Seq2Seq model that relies solely on the context vector, our 'Future-Aware' decoder injects known future meteorological drivers (Forecasted Precip, Temp) at every timestep of the decoding phase. This is critical because soil moisture is a driven system; you cannot predict it without knowing future rain. The context vector provides the initial state (how wet is it now?), and the drivers provide the forcing (will it rain?), allowing the LSTM to integrate the differential equation forward in time.",
    iconName: "ArrowRight"
  },
  [ModelComponentType.PHYSICS]: {
    id: ModelComponentType.PHYSICS,
    title: "Physics Regularizer",
    description: "A novel custom loss layer that penalizes predictions violating the hydrological water balance equation.",
    technicalDetails: [
      "Equation: ΔSM = P - ET - Runoff",
      "Implementation: Custom Keras Layer",
      "Logic: Calculates residual between change in soil moisture and net influx",
      "Impact: Enforces physical plausibility in pure DL models"
    ],
    extendedDescription: "Deep Learning models are universal function approximators, but they often violate fundamental laws of physics (e.g., creating water out of nothing). We embed the Water Balance Equation directly into the loss landscape. We calculate the change in predicted Soil Moisture (ΔSM) and compare it to the net influx (Precipitation - Evapotranspiration). The squared residual is added to the loss. This acts as a soft constraint, guiding the gradient descent towards physically valid solutions, especially in data-sparse regions.",
    iconName: "Scale"
  },
  [ModelComponentType.OUTPUT]: {
    id: ModelComponentType.OUTPUT,
    title: "Weighted Output",
    description: "Final predictions with a loss function upweighted for shallow layers, which are more volatile and difficult to predict.",
    technicalDetails: [
      "Loss: Weighted MSE",
      "Weights: Shallow layers penalize error 2x more than deep layers",
      "Output Shape: (Batch, Timesteps, Depths)"
    ],
    extendedDescription: "Surface soil moisture has much higher variance than deep soil moisture. In a standard MSE loss, the model would prioritize fitting the high-variance surface data while ignoring the deep layers, or vice-versa depending on magnitude. We implement a Weighted MSE where errors at the 5cm layer are multiplied by 2.0, and errors at 100cm are multiplied by 1.0. This ensures the model works hard to capture the rapid fluctuations at the surface while still maintaining accuracy at depth.",
    iconName: "Zap"
  }
};

export const CURRICULUM_STAGES: CurriculumStage[] = [
  {
    horizon: "1 Day",
    hours: 24,
    description: "Initial training on short-term dynamics. High frequency fluctuations.",
    transfer: false
  },
  {
    horizon: "3 Days",
    hours: 72,
    description: "Transfer weights from 1D. Fine-tune on mid-term patterns.",
    transfer: true
  },
  {
    horizon: "7 Days",
    hours: 168,
    description: "Final transfer. Training on long-term trends and seasonality.",
    transfer: true
  }
];
