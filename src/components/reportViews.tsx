"use client";

import { useEffect } from "react";

export default function ReportViews({
  slug,
  title,
  category,
}: {
  slug: string;
  title: string;
  category: string;
}) {
  useEffect(() => {
    const postData = async () => {
      try {
        await fetch("http://localhost:3000/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug, title, category }),
        });
      } catch (error) {
        console.log("something is up...", error);
      }
    };
    postData();
  }, [category, slug, title]);

  return <></>;
}
