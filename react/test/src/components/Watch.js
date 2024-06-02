import React, { useEffect, useState } from "react";

function Watch() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();
            setTime(currentTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Digital Watch</h1>
            <p>Current Time: {time}</p>
        </div>
    );
}

export default Watch;
