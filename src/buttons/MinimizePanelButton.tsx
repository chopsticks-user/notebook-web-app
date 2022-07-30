import React from 'react'

type MinimizePanelButtonProps = {
    index: number;
    color: string;
    setMinimized: any;
}

const MinimizePanelButton: React.FC<MinimizePanelButtonProps> = ({
    index, color, setMinimized
}) => {
    const minimizePanelButton: string = ">";
    return (
        <button
            className="minimize-panel-button"
            style={{ color: color }}
        >
            {minimizePanelButton}
        </button>
    )
}

export default MinimizePanelButton;