const API_URL =import.meta.env.VITE_API_URL;

export const sendContact = async (data) => {
    const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      return response.json();
}

