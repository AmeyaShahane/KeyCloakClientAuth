// App.js
import React, { useEffect, useState } from "react";

const App = () => {
  const [resourceData, setResourceData] = useState(null);

  useEffect(() => {
    // Replace 'your-jwt-token' with the actual JWT token you have
    const jwtToken =
"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ6R0RyQzRKcWptcWU1YTAxUEtBZXBNaURYMVZBMWl2TDRnWmg3b2l3QlhnIn0.eyJleHAiOjE2OTA1NzA5MTgsImlhdCI6MTY5MDU3MDYxOCwiYXV0aF90aW1lIjoxNjkwNTcwNTk4LCJqdGkiOiI2ODc4M2I2MS1iZTFiLTQ3Y2MtODU4YS05ODg5NzA0NDczYzYiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL2FzaGFoYW5lIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk5NzRmZDQ0LTA0YjctNDY3NS05YjBlLTY3NWYxZGQ5YzAzMyIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15Y2xpZW50Iiwibm9uY2UiOiJjMDE0YjdjZi00MTVjLTQ0MmItOGQ5MS1lYWQwZTkzMmY2NjYiLCJzZXNzaW9uX3N0YXRlIjoiYzc1ODdlNTctZDU0Zi00NGJhLWE2NWUtZTBhNWI3ZWUwYjFjIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjMwMDEiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtYXNoYWhhbmUiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInNpZCI6ImM3NTg3ZTU3LWQ1NGYtNDRiYS1hNjVlLWUwYTViN2VlMGIxYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiYXNoYWhhbmUgYXNoYWhhbmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhc2hhaGFuZSIsImdpdmVuX25hbWUiOiJhc2hhaGFuZSIsImZhbWlseV9uYW1lIjoiYXNoYWhhbmUiLCJlbWFpbCI6ImFzaGFoYW5lQG1hZ2ljbGVhcC5jb20ifQ.EAXTR6XijKkIKtL25cC72JD6-ppDZbQiRsqUurIZF_OjnnFv-UmJgCrawsnacKolWzTwacUb4agwusJhzNDspzsJrMj0np-0CU7q9SzU5l5KjswPtBw75hJvFRy5IYMdClhryKAUF5lschInIs2CoE9MbtATNH31qUTGUw2M31ylag7ORvgPZU0LZS31x8ezKO1mnK7BB3vf-d_hKHdKbtrEzVlBsf6q_OobrsZ298ctwFKZPKLLlOZsqGFm6ewQCRTrg7rv-tuXfNHkhFdktG43DVWv2aHm09IhG7O4wYa2tB-THilGmyzB92Ha-gZnc2g5fXmJVfO6tahHzOzIog";      
    // URL of your Go service's protected resource
    const url = "http://localhost:8000/api/resource";

    // Make the API request with the JWT token in the Authorization header
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received resource data:", data);
        setResourceData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Resource Data: {resourceData ? JSON.stringify(resourceData) : "Loading..."}</p>
    </div>
  );
};

export default App;

