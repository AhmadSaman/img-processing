import Link from "./Link";
const Links = ({ linksArray, setLinksArray }) => {
	return (
		<div
			style={{
				width: "100wv",
				display: "flex",
				flexDirection: "column",
				flexWrap: "wrap",
				alignContent: "center",
				WebkitAlignItems: "center",
			}}
		>
			{linksArray.map((link) => {
				return (
					<Link
						linkLink={link.link}
						linkID={link.id}
						key={link.id}
						linksArray={linksArray}
						setLinksArray={setLinksArray}
					/>
				);
			})}
		</div>
	);
};

export default Links;
