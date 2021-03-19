const Avatar = (props) => {
	return (
		<div
			className="peer--avatar"
			style={
				!props.src
					? {
							background: `linear-gradient(143.11deg, ${'#'+(Math.random()*0xFFFFFF<<0).toString(16)}, rgba(255, 255, 255, 0) 137.7%)`,
					  }
					: {}
			}
		>
			{props.src ? (
				<img
					className={
						"peer--avatar " +
						(props.small ? "message--small" : "message--normal")
					}
					src={props.src}
				/>
			) : (
				""
			)}
		</div>
	);
};
export default Avatar;
