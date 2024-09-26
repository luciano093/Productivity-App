import "./styles/landing.css"

import { api } from "note/trpc/server";
import TaskMaster from "./_components/homepage1";
import Navbar from "./_components/navbar";
import LandingDescription from "./_components/landing-description";
import LandingDescriptionSubheading from "./_components/landing-description-subheading";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <>
      <Navbar />
      <TaskMaster />
      <LandingDescription title="TaskMaster: your day, simplified" description="TaskMaster is a powerful, intuitive to-do app designed to streamline your tasks and boost productivity. With its user-friendly interface and smart features, TaskMaster helps you organize, prioritize, and conquer your daily to-dos with ease.">
        <LandingDescriptionSubheading title="Smart Task Management" description="Organize your day with effortless task creation and categorization. TaskMaster's intuitive design allows you to add tasks, set deadlines, and organize projects in just a few taps. Never miss a deadline again with smart reminders that adapt to your schedule." />
        <LandingDescriptionSubheading title="Seamless Project Tracking" description="For more complex projects, TaskMaster lets you break down tasks into subtasks, offering a clear path to completion. Stay on top of long-term goals with progress tracking, ensuring you’re always moving forward." />
        <LandingDescriptionSubheading title="Customizable Prioritization" description="Not all tasks are created equal. With TaskMaster, you can set priority levels for each task, ensuring the most important jobs are tackled first. Use the color-coded priority system to easily visualize your day at a glance." />
        <LandingDescriptionSubheading title="Goal Setting & Milestones" description="Go beyond daily tasks by setting long-term goals and tracking milestones. Whether it’s personal development, fitness, or a big project, TaskMaster helps you outline actionable steps and measures your progress, so you stay motivated and on target.F" />
      </LandingDescription>
    </>
  );
}
