import React, { useEffect, useRef, useState } from "react";
import Start from "./Start/Start";
import TaskEntry from "./TaskEntry/TaskEntry";

function App() {
  const name = useRef<HTMLInputElement>();
  const timeToRemind = useRef<HTMLInputElement>();
  const [shiftPage, setShiftPage] = useState(false);
  const [startEntry, setStartEntry] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    chrome.storage.local.get((res) => {
      if (res.username && res.timeToRemind) {
        setUsername(res.username);
        setStartEntry(true);
      }
    });
  });

  const onNameSave = (e: any) => {
    e.preventDefault();
    name.current.value = name.current.value.trim().toUpperCase();

    if (name.current.value) {
      chrome.storage.local.set(
        {
          username: name.current.value,
        },
        () => {
          setShiftPage(true);
        }
      );
    }
  };

  const onTimeSave = (e: any) => {
    e.preventDefault();

    if (timeToRemind.current.value) {
      chrome.storage.local.set(
        {
          timeToRemind: timeToRemind.current.value,
        },
        () => {
          chrome.runtime.sendMessage({ time: timeToRemind.current.value });
          setStartEntry(true);
        }
      );
    }
  };

  return (
    <div>
      {!startEntry ? (
        !shiftPage ? (
          <Start
            heading={"Let's get started!"}
            subHeading={"Hey Buddy, what should I call you?"}
            inputRef={name}
            inputType={"text"}
            onSave={onNameSave}
          />
        ) : (
          <Start
            heading={`Hi ${name.current.value}`}
            subHeading={"When you want me to remind?"}
            inputRef={timeToRemind}
            inputType={"time"}
            onSave={onTimeSave}
          />
        )
      ) : (
        <TaskEntry username={username} />
      )}
    </div>
  );
}

export default App;
