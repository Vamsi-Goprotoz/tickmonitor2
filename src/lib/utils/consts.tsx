import {
  CrisisAlert,
  DensityMedium,
  LowPriority,
  PriorityHigh,
} from "@mui/icons-material";

export const urgencies = [
  {
    id: "0",
    value: "low",
    label: "Low",
    icon: <LowPriority fontSize="small" />,
    color: {
      backgroundColor: "#69c440",
      color: "#fff",
    },
  },
  {
    id: "1",
    value: "medium",
    label: "Medium",
    icon: <DensityMedium fontSize="small" />,
    color: {
      backgroundColor: "#f1dc32",
      color: "#fff",
    },
  },
  {
    id: "2",
    value: "high",
    label: "High",
    icon: <PriorityHigh fontSize="small" />,
    color: {
      backgroundColor: "#ff9323",
      color: "#fff",
    },
  },
  {
    id: "3",
    value: "critical",
    label: "Critical",
    icon: <CrisisAlert fontSize="small" />,
    color: {
      backgroundColor: "#da0808",
      color: "#fff",
    },
  },
];
