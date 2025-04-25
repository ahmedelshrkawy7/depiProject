import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="bg-red-400">
      <h2>
        not found
        <Link to="/">return home</Link>
      </h2>
    </div>
  );
}
