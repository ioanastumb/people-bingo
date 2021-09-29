import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import settings from '../settings.json';

const Footer = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Source code available on '}
        <Link href="https://github.com/IoanaStumb/people-bingo">
            Github.
        </Link>
        <br/>
        {'Version'} {settings.version}
    </Typography>
);

export default Footer;