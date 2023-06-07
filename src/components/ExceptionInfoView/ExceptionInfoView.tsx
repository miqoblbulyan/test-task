import { EXCEPTION_INFO_CONTENT } from "../../mock";
import { ExceptionIndex, ExceptionInfoElement, ExceptionInfoType, ExceptionInfoWrapper, ExceptionValue } from "./styled";

export const ExceptionInfoView = () => {
    return (
        <ExceptionInfoWrapper>
            {EXCEPTION_INFO_CONTENT.map((info, index) => (
                <ExceptionInfoElement>
                    <ExceptionIndex>{index + 1}</ExceptionIndex>
                    <ExceptionValue>
                        <strong style={{ fontSize: "14px", lineHeight: "20px" }}>{info.title}</strong>
                        <p style={{ margin: 0 }}>{info.value}</p>
                    </ExceptionValue>
                    <ExceptionInfoType type={info.type}>{info.type}</ExceptionInfoType>
                </ExceptionInfoElement>
            ))}
        </ExceptionInfoWrapper>
    )
};