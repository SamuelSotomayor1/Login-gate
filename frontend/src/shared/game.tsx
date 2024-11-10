import { useEffect, useState } from "react";
import { useAuth } from "../auth/authProvider";
import { API_URL } from "../auth/constants";

interface Todo {
  id: string;
  title: string;
  completed: boolean; 
}

export const Game = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const auth = useAuth();

  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        headers: {
          "Content-Type" : "application/json",
          Authorization: `Bearer ${auth.getAccessToken()}`,
        },
      });


      if(response.ok){
        const json = await response.json();
        console.log("Datos recibidos de la API:", json);
        setTodos(json);
        
      } else {
        console.error(`Error ${response.status}: ${response.statusText}`);
      }
      //const data = await response.json();
      //setTodos(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Network error or unexpected error occurred:", error.message);
    } else {
        console.error("Unknown error:", error);
    }
    }


  }
  return (
    <div>
      <h1>Bienvenido al Juego {auth.getUser()?.username || ""}</h1>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
    </div>
  );
}
