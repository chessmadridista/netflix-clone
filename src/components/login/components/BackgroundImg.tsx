function BackgroundImg(): JSX.Element {
    return (
        <img
            src="src/assets/login background.jpg"
            alt="Enter email background image."
            style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                opacity: '0.6',
                filter: 'blur(1px)'
            }}
        />
    );
}

export default BackgroundImg;