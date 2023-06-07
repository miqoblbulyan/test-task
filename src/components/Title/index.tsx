import { ITitleProps } from "../../types";
import { TitleWrapper } from "./styled";

export const Title = ({ title, color, Icon }: ITitleProps) => {
    return (
        <TitleWrapper>
            <Icon
                sx={{
                    width: "24px",
                    height: "24px",
                    fill: color
                }}
            />
            <strong style={{ fontSize: "14px" }}>{title}</strong>
        </TitleWrapper>
    );
};