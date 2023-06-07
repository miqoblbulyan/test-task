import { IconButton, Typography } from "@mui/material";
import { useSidePanel } from '../../hooks/useSidePanel';
import { StyledMain } from './styled';

export const Main = () => {
    const { toggleSidePanel, isOpen } = useSidePanel();

    return (
        <StyledMain isOpen={isOpen}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleSidePanel}
            >
                Toggle Side Panel
            </IconButton>

            <LoremIpsum />
            <LoremIpsum />
        </StyledMain>
    );
};

const LoremIpsum = () => (
    <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
        posuere sollicitudin aliquam ultrices sagittis orci a.
    </Typography>
);