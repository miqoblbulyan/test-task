import { ExceptionType, IExceptionElement, IInfoDataView } from "./types";

export const GENERAL_INFO_CONTENT: IInfoDataView[] = [
  {
    title: "Invoice number",
    value: "HG-2659874113",
  },
  {
    title: "Contract",
    value: "Rapid To ICL Audiocods Contracts",
    isItalic: true,
  },
];

export const OPERATIONAL_INFO_CONTENT: IInfoDataView[] = [
  { title: "Created At", value: "13.02.2022" },
  { title: "Created By", value: "Lior" },
  { title: "Operation Date", value: "04.11.2021" },
  { title: "Invoice number", value: "HG-2659874113" },
  { title: "Event", value: "Transportation", isItalic: true },
  { title: "Service", value: "Shop2Address", isItalic: true },
  { title: "Transaction", value: "4ayk2mui8m", isItalic: true },
  { title: "Transmission Type", value: "No value found", isItalic: true },
];

export const EXCEPTION_INFO_CONTENT: IExceptionElement[] = [
  {
    title: "Missing data",
    value: "Missing Priority Shipment Data",
    type: ExceptionType.critical,
  },
  {
    title: "No pricing",
    value:
      "26 PLL To Sweden; Original Charge (€1,750.00) Is Above The Approximate Price (€1,539.00) For 26 PLL; 20 PLL (€1,485.00), Approximate Cost Per PLL (€9.00); (Including A Threshold Of 1%/€20.00)",
    type: ExceptionType.high,
  },
  {
    title: "Title",
    value: "Might Be Dedicated Truck",
    type: ExceptionType.medium,
  },
];
