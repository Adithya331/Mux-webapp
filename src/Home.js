import { useCallback, useEffect, useRef, useState } from "react";
import { Space, SpaceEvent } from "@mux/spaces-web";
import { NavLink, useNavigate } from 'react-router-dom';
import Participant from "./Participant";
import "./App.css";

// 🚨 Don’t forget to add your own JWT!
const JWT = "eyJhbGciOiJSUzI1NiJ9.eyJraWQiOiJzQ0VHMDJkY1FKVmVRM0VYeG9ydXhRdkVmYzhMSXpYeVdEbVVwdFluSzJ0byAgwqAiLCJhdWQiOiJydCIsInN1YiI6IkxRSEpJMDJxZlZGUU0wMjFPMDFoZjAyN2hyOUZ1ZTAxcjJvd2NNbWQ2MDJrd043aGciLCJyb2xlIjoicHVibGlzaGVyIiwicGFydGljaXBhbnRfaWQiOiIiLCJleHAiOjE2ODUxMDMwNzB9.cAyp1qN59yYS4dk3d1xm-a0d6Hhwj1hh1lLz64NklDwcn5N9PawBDzm4jCuohYQBHD8m1DnjwpHzbmPjWfhAQYsLAKKW2nF251UHXlwG7sn5WAUHc5rOi1ilYC7j3jVKnvUlGghq8Y0v0C3wwyli7enEzJNvtiAHSyt9HZzBoUBUb05sFMptSTPW6DlxHx4DP5Kt07vEjpJxKOFT0ILSkfqv3FYiw4qcE2MBTB9MYfFoV5OyUFG3KCEMZKi579oAdJq0N9hbI_eFU_vXKf9PLqVXD4J1efk3ReaVqBlfPjqWQLsdkf2rTTySZnGru_v6y1sK3d4uuRHXRJtcDCOm_A";

function Home() {
	let navigate = useNavigate();
	const logout = () => {
		sessionStorage.removeItem('Auth Token')
		navigate("/login")
	}
	
  const spaceRef = useRef(null);
  const [localParticipant, setLocalParticipant] = useState(null);
  const [participants, setParticipants] = useState([]);
  const joined = !!localParticipant;

  const addParticipant = useCallback(
    (participant) => {
      setParticipants((currentParticipants) => [
        ...currentParticipants,
        participant,
      ]);
    },
    [setParticipants]
  );

  const removeParticipant = useCallback(
    (participantLeaving) => {
      setParticipants((currentParticipants) =>
        currentParticipants.filter(
          (currentParticipant) =>
            currentParticipant.connectionId !== participantLeaving.connectionId
        )
      );
    },
    [setParticipants]
  );

  useEffect(() => {
    const space = new Space(JWT);

    space.on(SpaceEvent.ParticipantJoined, addParticipant);
    space.on(SpaceEvent.ParticipantLeft, removeParticipant);

    spaceRef.current = space;

    return () => {
      space.off(SpaceEvent.ParticipantJoined, addParticipant);
      space.off(SpaceEvent.ParticipantLeft, removeParticipant);
    };
  }, [addParticipant, removeParticipant]);

  const join = useCallback(async () => {
    // Join the Space
    let localParticipant = await spaceRef.current.join();

    // Get and publish our local tracks
    let localTracks = await localParticipant.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    await localParticipant.publishTracks(localTracks);

    // Set the local participant so it will be rendered
    setLocalParticipant(localParticipant);
  }, []);

  return (
    <div  className="App">
      <button onClick={join} disabled={joined}>
        Join Space
      </button>
	  <button onClick={logout} class="inline-flex text-white bg-blue-500 hover:bg-red-600 border-0 py-2 px-6 focus:outline-none rounded text-lg m-3 float-right justify-end">Logout</button>



      {localParticipant && (
        <Participant
          key={localParticipant.connectionId}
          participant={localParticipant}
        />
      )}

      {participants.map((participant) => {
        return (
          <Participant
            key={participant.connectionId}
            participant={participant}
          />
        );
      })}
    </div>
  );
}

export default Home;

