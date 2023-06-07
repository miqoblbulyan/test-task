import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { DrawerHeader, InfoDataViewContainer, InfoWrapper, SidePanelCloseButton, StyledDrawer } from "./styled";
import { useSidePanel } from '../../hooks/useSidePanel';
import { ISidePanelProps } from "../../types";
import { IconButton } from '@mui/material';
import { Title, ChargeInfo } from "..";
import { SettingsIcon } from '../icons';
import { InfoDataView } from '../InfoDataView';
import { GENERAL_INFO_CONTENT, OPERATIONAL_INFO_CONTENT } from '../../mock';
import { ExceptionInfoView } from '../ExceptionInfoView/ExceptionInfoView';
import { ScoreInfo } from '../ScoreInfo';

export const SidePanel = ({ children }: ISidePanelProps) => {
    const { isOpen, toggleSidePanel } = useSidePanel();

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {children}
            <StyledDrawer
                variant="persistent"
                anchor="right"
                open={isOpen}
            >
                <div style={{ padding: isOpen ? "40px 32px" : 0 }}>
                    <DrawerHeader>
                        <IconButton
                            sx={{
                                padding: 0,
                            }}
                            onClick={toggleSidePanel}
                        >
                            <SidePanelCloseButton>
                                <ArrowForwardIosIcon sx={{
                                    width: "10px",
                                }} />
                            </SidePanelCloseButton>
                        </IconButton>
                    </DrawerHeader>
                    <ChargeInfo />
                    <ScoreInfo />
                    <InfoWrapper>
                        <div>
                            <Title Icon={InfoIcon} title="General info" color="#568793" />
                            <InfoDataViewContainer>
                                {GENERAL_INFO_CONTENT.map(info => <InfoDataView {...info} />)}
                            </InfoDataViewContainer>
                        </div>
                        <div>
                            <Title Icon={SettingsIcon} title="Operational Data" color="#568793" />
                            <InfoDataViewContainer>
                                {OPERATIONAL_INFO_CONTENT.map(info => <InfoDataView {...info} />)}
                            </InfoDataViewContainer>
                        </div>
                        <div>
                            <Title Icon={ErrorIcon} title="Exception" color="#EB5757" />
                            <ExceptionInfoView />
                        </div>
                    </InfoWrapper>
                </div>
            </StyledDrawer>
        </Box>
    );
};