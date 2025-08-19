import { Bell, Bot, FileText, Search } from "lucide-react"


const FeatureItems = [
    {
        icon: <Bot />,
        title: "AI Note-Taker",
        description: "No more note-taking or distractions. Our AI bot automatically joins your meetings, listens in, and takes care of everything while you stay focused."
    },
    {
        icon: <FileText />,
        title: "Summaries in Bullet Points",
        description: "Get crisp, clear, and actionable summaries right after your meeting. No fluff, just the key takeaways."
    },
    {
        icon: <Search />,
        title: "Search Your Past Meetings",
        description: "Find any decision, task, or discussion in seconds. All your meetings are indexed and searchable like Google."
    },
    {
        icon: <Bell />,
        title: "Notifications & Task Automation",
        description: "Seamlessly integrated with Slack, Notion, and Calendars — so you never miss a follow-up. Tasks are auto-created and deadlines assigned without lifting a finger."
    }
]



export default function Features() {

    return (
        <>
            <div className="pb-12">
                <h1 className="text-5xl text-center font-bold tracking-wide ">Features</h1>
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {FeatureItems.map((x, i) => (
                        <div
                            key={i}
                            className="border border-black rounded-lg p-6 flex flex-col items-start hover:shadow-lg transition-all  "
                        >
                            <div className="mb-3">{x.icon}</div>
                            <div className="font-semibold text-lg mb-2">{x.title}</div>
                            <div className="text-gray-400">{x.description}</div>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )

}