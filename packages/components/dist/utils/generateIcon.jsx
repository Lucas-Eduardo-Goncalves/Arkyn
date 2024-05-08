function GenerateIcon(iconSize, Icon) {
    if (!Icon)
        return <></>;
    return <Icon size={iconSize} strokeWidth={2.5}/>;
}
export { GenerateIcon };
