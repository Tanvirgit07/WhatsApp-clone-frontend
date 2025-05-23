import Sidebar from "../_components/Sidebar";

export const ConversationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Sidebar>
      <div className="h-full w-full flex justify-center bg-gray-200">
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationLayout;
