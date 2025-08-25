import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
      )}

      <footer>mani</footer>
    </>
  );
};

export default AppLayout;
