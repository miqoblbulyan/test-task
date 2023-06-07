import { ChargeTitle } from "../SidePanel/styled";
import shareIco from "../../assets/shareIco.svg";
import { ChargeInfoWrapper, StyledChip, StyledStack } from "./styled";

export const ChargeInfo = () => {
    return (
        <ChargeInfoWrapper>
            <StyledStack direction="row" spacing={1}>
                <ChargeTitle>Charge: Charge-2ymgek0iy6</ChargeTitle>
                <StyledChip label="primary" variant="outlined" />
            </StyledStack>
            <img style={{ cursor: "pointer" }} src={shareIco} alt="share" />
        </ChargeInfoWrapper>
    );
};