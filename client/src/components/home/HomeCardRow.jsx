import { Card, CardContent } from "@/components/ui/card";

export default function HomeCardRow() {
  return (
    <section className="px-10 py-20 bg-gradient-to-r from-purple-200 via-pink-100 to-purple-200">
      <div className="grid gap-10 md:grid-cols-3">
        <Card variant="muted">
          <CardContent>
            <HomeIcon className="h-16 w-16 mt-4 text-orange-400" />
            <h3 className="mt-4 text-lg font-semibold">
              Home cooked Yum Warm Meals
            </h3>
            <p>
              When food is prepared at home, you get the best meals prepared
              which is tasty as well
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <SaladIcon className="h-16 w-16 mt-4 text-green-400" />
            <h3 className="mt-4 text-lg font-semibold ">
              Fresh Ingredients For Menu
            </h3>
            <p>
              When food is prepared at home, you get the best meals prepared
              which is tasty as well
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <MenuIcon className="h-16 w-16 mt-4 text-blue-400" />
            <h3 className="mt-4 text-lg font-semibold ">
              You Fix Your Own Menu To Eat
            </h3>
            <p>
              When food is prepared at home, you get the best meals prepared
              which is tasty as well
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
  function HomeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }

  function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  }

  function SaladIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 21h10" />
        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
        <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
        <path d="m13 12 4-4" />
        <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
      </svg>
    );
  }
}
