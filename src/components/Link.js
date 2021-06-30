import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { CardActions } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import LinkIcon from "@material-ui/icons/Link";
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#f5f5f5",
		width: "250px",
		height: "100%",
		margin: "10px",
	},
	img: {
		width: "100%",
	},

	typo: {
		display: "inline",
		padding: "0px",
	},
	padding: {
		paddingTop: "10px",
	},
}));

const Link = ({ linkLink, linkID, linksArray, setLinksArray }) => {
	const classes = useStyles();
	function deleteHandle() {
		setLinksArray(
			linksArray.filter((link) => {
				return link.id !== linkID;
			})
		);
	}
	return (
		<Card className={classes.root}>
			<img className={classes.img} src={linkLink} alt="" />
			<CardContent className={classes.padding} className="">
				<CardActions disableSpacing className={classes.typo}>
					<IconButton className={classes.padding} onClick={deleteHandle}>
						<a href={linkLink}>
							<LinkIcon />
						</a>
					</IconButton>
				</CardActions>
				<CardActions disableSpacing className={classes.typo}>
					<IconButton className={classes.padding} onClick={deleteHandle}>
						<i>
							<DeleteIcon />
						</i>
					</IconButton>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default Link;
