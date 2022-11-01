import React, { useState } from "react";

export default function FormList() {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    // MediaStreamAudioDestinationNode()
  };

  const handleSubmit = (e) => {
    console.log(title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Id</label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="userId"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Body</label>
          <input
            type="text"
            name="userId"
            value={body}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
