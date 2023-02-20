import { useEffect, useRef, } from "react";
import "./App.css";
import { StaticAuthProvider } from "@twurple/auth";
import { ApiClient } from "@twurple/api";
import { EventSubWsListener } from "@twurple/eventsub-ws";
import { isNode } from '@d-fischer/detect-node';

function App() {
  const quit = useRef<VoidFunction | null>(null);
  console.log(isNode) // shows false

  useEffect(() => {
    const clientId = "";
    const accessToken = "";
    const scopes = ["channel:read:redemptions"];
    const authProvider = new StaticAuthProvider(clientId, accessToken, scopes);
    const apiClient = new ApiClient({ authProvider });
    const listener = new EventSubWsListener({
      apiClient,
      logger: {
        minLevel: 3,
      },
    });

    const sub = listener.onChannelRedemptionAdd('12345', (ev) => {
      console.log("I'm subscribed!", ev);
    });

    listener.start();

    quit.current = () => {
      sub.stop();
      listener.stop();
    };

    return () => quit.current?.();
  }, []);

  return <button onClick={() => quit.current?.()}>Click me to quit</button>;
}

export default App;