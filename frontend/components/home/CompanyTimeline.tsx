import { Timeline } from "../ui/timeline";
import "../../app/globals.css";

export default function CompanyTimeline() {
  return (
    <Timeline
      data={[
        {
          year: 2020,
          title: "The Foundation",
          content: (
            <div>
              <p>
                Launched during the COVID-19 pandemic, offering essential
                recruitment services to founders in need of quality manpower.
              </p>
            </div>
          ),
        },
        {
          year: 2021,
          title: "Momentum",
          content: (
            <div className="">
              <p className="">
                Achieved significant momentum with a high repeat customer ratio
                and strong word-of-mouth publicity. We are a trusted partner in
                the industry.
              </p>
            </div>
          ),
        },
        {
          year: 2022,
          title: "Resilience",
          content: (
            <>
              <p>
                Strategically managed market slowdowns and economic challenges,
                ensuring stability and continued service excellence.
              </p>
            </>
          ),
        },
        {
          year: 2023,
          title: "Global Expansion",
          content: (
            <>
              <p>
                Expanded operations globally, establishing a presence in Europe,
                Australia, Africa, and the Middle East despite market
                turbulence.
              </p>
            </>
          ),
        },
        {
          year: 2024,
          title: "Scaling Heights",
          content: (
            <>
              <p>
                Continued to grow by diversifying services and strengthening
                market position, focusing on innovation and client satisfaction.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
