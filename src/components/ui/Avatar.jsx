const Avatar = (props) => {
	return (
		<img
			className={
				"peer--avatar " + (props.small ? "message--small" : "message--normal")
			}
			src={props.src}
		/>
	);
};
export default Avatar;
