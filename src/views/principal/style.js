import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(4)
	},
	img: {
		width: '100%',
		height: '100%'
	},
	cont: {
		width: '100% !important'	
	}

}));

export default useStyles;