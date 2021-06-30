import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center",
		"& > *": {
			margin: theme.spacing(1),
			width: "90%",
		},
	},
}));

const ImgLink = ({ LinkInput, linksArray, setLinkInput, setLinksArray }) => {
	const classes = useStyles();
	function submitHandler(e) {
		if (e.which === 13) {
			e.preventDefault();
			setLinksArray([{ id: uuidv4(), link: LinkInput }, ...linksArray]);
			setLinkInput("");
		}
	}
	function inputLink(e) {
		setLinkInput(e.target.value);
	}

	return (
		<div>
			<form
				className={classes.root}
				onKeyPress={submitHandler}
				noValidate
				autoComplete="off"
			>
				<TextField
					id="filled-basic"
					label="Link"
					variant="filled"
					value={LinkInput}
					onChange={inputLink}
				/>
			</form>
		</div>
	);
};

export default ImgLink;
