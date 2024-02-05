import "@copilotkit/react-ui/styles.css"; // add to the app-global css
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { useMakeCopilotActionable } from "@copilotkit/react-core";

function MyAmazingContent() {
    const importantInfo = useImportantInfo();
    useMakeCopilotReadable("very importnat information: " + importantInfo);

    useMakeCopilotActionable(
        {
            name: `selectDestinations_${toCamelCase(heading)}`,
            description: `Set the given destinations as 'selected', on the ${heading} table`,
            argumentAnnotations: [
                {
                    name: "destinationNames",
                    type: "array",
                    items: {
                        type: "string",
                    },
                    description: "The names of the destinations to select",
                    required: true,
                },
            ],
            implementation: async (destinationNames: string[]) => {
                setCheckedRows((prevState) => {
                    const newState = { ...prevState };
                    destinationNames.forEach((destinationName) => {
                        newState[destinationName] = true;
                    });
                    return newState;
                });
            },
        },
        [],
    );


    return (
        <YourContent />
    );
}


export default function App() {
  return (
    <CopilotKit url="/api/copilotkit/chat"> {/* Global state & copilot logic. Put this around the entire app */}
      <CopilotSidebar> {/* A built-in Copilot UI (or bring your own UI). Put around individual pages, or the entire app. */}
        <MyAmazingContent />
      </CopilotSidebar>
    </CopilotKit>
  );
}