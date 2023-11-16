import React from 'react';
import './timelinepage.css';
import RecyclingRoundedIcon from '@mui/icons-material/RecyclingRounded';
import timelineElements from "./timelineElement";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function timeline() {

  return (
    <div>
      <h1 className="timeline-title">Our Journey <br/><span>So Far...</span> </h1>
      <VerticalTimeline>
      {timelineElements.map((element) => {

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={element.iconstyles}
              contentStyle={element.styles}
              icon={<RecyclingRoundedIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default timeline;