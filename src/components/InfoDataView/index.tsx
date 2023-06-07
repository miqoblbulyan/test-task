import { memo } from "react";
import { IInfoDataView } from "../../types";
import { InfoDataViewTitle, InfoDataViewValue, InfoDataViewWrapper } from "./styled";

export const InfoDataView = memo(({ title, value, isItalic }: IInfoDataView) => (
    <InfoDataViewWrapper>
        <InfoDataViewTitle>{title}</InfoDataViewTitle>
        <InfoDataViewValue isItalic={isItalic}>{value}</InfoDataViewValue>
    </InfoDataViewWrapper>
));