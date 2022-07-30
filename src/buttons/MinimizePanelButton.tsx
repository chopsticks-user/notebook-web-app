import React from 'react'

type MinimizePanelButtonProps = {
    color: string;
}

const MinimizePanelButton: React.FC<MinimizePanelButtonProps> = ({ color }) => {
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