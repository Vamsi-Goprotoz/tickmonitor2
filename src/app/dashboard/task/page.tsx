"use client";

import DateFilter from "@/components/menus/DateFilter";
import ProjectsFilter from "@/components/menus/ProjectsFilter";
import StatusFilter from "@/components/menus/StatusFilter";
import UrgencyFilter from "@/components/menus/UrgencyFilter";
import AssignedTaskCard from "@/components/task/AssignedTaskCard";
import TaskRow from "@/components/task/TaskRow";
import SkeletonTaskRow from "@/components/task/SkeletonTaskRow"; // Import SkeletonTaskRow
import { LineBreak } from "@/components/ui/LineBeak";
import SectionHeading from "@/components/ui/SectionHeading";
import UserAvatar from "@/components/user/UserAvatar";
import { useDomain } from "@/contexts/DomainContext";
import { useTasks } from "@/contexts/TasksContext";
import { urgencies } from "@/lib/utils/consts";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {
  Add,
  ArrowForward,
  ArrowRight,
  ArrowRightSharp,
  CommentOutlined,
  InfoOutlined,
  KeyboardArrowDown,
  List,
  MoreVert,
} from "@mui/icons-material";
import {
  Avatar,
  Dialog,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Tasks = () => {
  const tasks = useTasks();
  const router = useRouter();
  const domain = useDomain();
  const [dateFilterEl, setDateFilterEl] = useState<HTMLInputElement | null>(
    null
  );
  const [urgencyFilterEl, setUrgencyFilterEl] = useState<HTMLElement | null>(
    null
  );
  const [statusFilterEl, setStatusFilterEl] = useState<HTMLElement | null>(
    null
  );
  const [projectFilterEl, setProjectFilterEl] = useState<HTMLElement | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      setLoading(false);
    }, 4000); 
  }, []);

  const handleDateFilterPress = (e: any) => {
    setDateFilterEl(e.target as HTMLInputElement);
  };
  const handleUrgencyFilterPress = (e: any) => {
    setUrgencyFilterEl(e.currentTarget as HTMLElement);
  };
  const handleStatusFilterPress = (e: any) => {
    setStatusFilterEl(e.target as HTMLElement);
  };
  const handleProjectFilterPress = (e: any) => {
    setProjectFilterEl(e.target as HTMLElement);
  };
  const handleDateFilterClose = () => {
    setDateFilterEl(null);
  };
  const handleUrgencyFilterClose = () => {
    setUrgencyFilterEl(null);
  };
  const handleStatusFilterClose = () => {
    setStatusFilterEl(null);
  };
  const handleProjectFilterClose = () => {
    setProjectFilterEl(null);
  };

  return (
    <>
      <div
        style={{
          height: "calc(100vh - 1rem)",
        }}
        className="flex-col flex"
      >
        <div className="px-6 flex items-center justify-between text-2xl font-bold py-4 bg-white">
          <div className="flex items-center justify-between gap-2 text-black ">
            Tasks
          </div>
          <div>
            <button className="bg-[#2D62ED] py-2.5 px-6 text-xs text-white rounded-md" onClick={() => {
                router.push("/dashboard/task/create");
              }}>Add Task</button>
          </div>
        </div>
        <div
          className="flex flex-col overflow-y-scroll"
          style={{
            height: "calc(100vh - 5rem)",
          }}
        >
          <div className="flex flex-col mx-4 mt-4 bg-[#f7fdfe] border border-[#5ed9ef] border-l-[4px] rounded-[6px]">
            <div className="rounded-md flex font-bold text-xs px-4 py-2">
              <div className="grid w-full" style={{ gridTemplateColumns: '19% 14% 14% 14% 10% 12% 12%', alignItems: 'center', gap: '10px' }}>
                <div className="w-full">Title</div>
                <div className="flex items-center group w-full">
                  Due Date
                  <div className="invisible group-hover:visible scale-90">
                    <IconButton
                      onClick={handleDateFilterPress}
                      sx={{ width: "30px", height: "30px" }}
                      size="small"
                    >
                      <MoreVert fontSize="small" sx={{}} />
                    </IconButton>
                  </div>
                </div>
                <div className="flex items-center group w-full">
                  Urgency
                  <div className="invisible group-hover:visible scale-90">
                    <IconButton
                      onClick={handleUrgencyFilterPress}
                      sx={{ width: "30px", height: "30px" }}
                      size="small"
                    >
                      <MoreVert fontSize="small" sx={{}} />
                    </IconButton>
                  </div>
                </div>
                <div className="flex items-center group w-full">
                  Status
                  <div className="invisible group-hover:visible">
                    <IconButton
                      onClick={handleStatusFilterPress}
                      sx={{ width: "30px", height: "30px" }}
                      size="small"
                    >
                      <MoreVert fontSize="small" sx={{}} />
                    </IconButton>
                  </div>
                </div>
                <div className="flex items-center group w-full">
                  Project
                  <div className="invisible group-hover:visible">
                    <IconButton
                      onClick={handleProjectFilterPress}
                      sx={{ width: "30px", height: "30px" }}
                      size="small"
                    >
                      <MoreVert fontSize="small" sx={{}} />
                    </IconButton>
                  </div>
                </div>
                <div className="text-center w-full">People</div>
                <div className="w-full">Actions</div>
              </div>
            </div>

            <div className="mt-1 ">
              {loading
                ? Array.from({ length: 10 }).map((_, index) => <SkeletonTaskRow key={index} />)
                : tasks?.tasksByMe.map((t, index) => {
                    return <TaskRow key={index} t={t} />;
                  })}
            </div>
          </div>
        </div>
      </div>
      <StatusFilter
        options={["To Initiate", "In Progress", "Completed", "On Hold"]}
        onClose={handleStatusFilterClose}
        anchRef={statusFilterEl}
        onChange={(curr, full) => {
          console.log(curr, full);
        }}
      />
      <ProjectsFilter
        options={domain?.verticals ?? []}
        onChange={(curr, full) => {}}
        anchRef={projectFilterEl}
        onClose={handleProjectFilterClose}
      />
      <UrgencyFilter
        options={["Critical", "High", "Medium", "Low"]}
        onChange={(curr, full) => {}}
        anchRef={urgencyFilterEl}
        onClose={handleUrgencyFilterClose}
      />
      <DateFilter
        onChange={(curr, full) => {}}
        onClose={handleDateFilterClose}
        anchRef={dateFilterEl}
      />
    </>
  );
};

export default Tasks;
