
import { CircularProgress } from "@mui/material";

export const ScoreInfo = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "16px 45px 36px 19px"
            }}>
                <CircularProgress
                    sx={{
                        backgroundColor: "#88C00D",
                        borderRadius: "50%",
                        color: "white",
                        border: "3px solid #88C00D",
                        strokeWidth: "3px",
                    }}
                    size={"56px"}
                    variant="determinate"
                    value={75}
                />
                <div style={{ position: "absolute", fontSize: "14px", color: "white" }}>50%</div>
            </div>
        </div >
    );
};