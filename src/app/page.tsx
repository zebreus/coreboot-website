import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { SVGProps } from "react";
import { cn } from "@/lib/utils";

export default function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center justify-center space-y-8 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Image
              priority
              src="/coreboot.svg"
              height={128}
              width={128}
              className="h-64 w-64"
              alt="coreboot logo"
            />
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                coreboot
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                coreboot is a free and open-source firmware that replaces the
                proprietary BIOS, providing a more secure and customizable
                alternative.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="https://doc.coreboot.org/getting_started/index.html"
            >
              Get Started
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#key-features"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        id="key-features"
      >
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Makes coreboot Special?
              </h2>
              {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Take your hardware to its limits
              </h2> */}
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                coreboot is a powerful and flexible firmware that offers a range
                of advanced features and benefits.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Open Source</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                coreboot is free and open-source software, allowing for
                transparency, customization, and community contributions.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Fast Boot</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                coreboot&apos;s streamlined boot process can significantly
                reduce boot times, improving system responsiveness.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Security</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                coreboot&apos;s security-focused design helps protect against
                vulnerabilities and provides a more secure computing
                environment.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Customization</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                coreboot&apos;s modular architecture allows for extensive
                customization and the integration of additional features and
                functionality.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Hardware Support</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                coreboot supports a wide range of hardware, including both
                legacy and modern systems, providing flexibility and
                compatibility.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Community</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                coreboot benefits from a vibrant and active community of
                contributors, developers, and users who collaborate to improve
                the project.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Documentation
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our comprehensive documentation to learn more about
              Coreboot and how to get started.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md space-y-2">
            <form
              className="flex space-x-2"
              action="https://doc.coreboot.org/search.html"
              method="get"
            >
              <Input
                className="max-w-lg flex-1"
                placeholder="Search documentation"
                type="text"
                name="q"
              />
              <input type="hidden" name="check_keywords" value="yes" />
              <input type="hidden" name="area" value="default" />
              <Button type="submit">Search</Button>
            </form>
            <div className="grid gap-2">
              <Link
                className="flex items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                href="https://doc.coreboot.org/getting_started/index.html"
              >
                <span>Getting Started</span>
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
              <Link
                className="flex items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                href="https://doc.coreboot.org/contributing/index.html"
              >
                <span>Contributing</span>
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
              <Link
                className="flex items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                href="https://doc.coreboot.org/mainboard/index.html"
              >
                <span>Mainboards</span>
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Community
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Connect with the coreboot community and stay up-to-date with the
              latest news and events.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Link
              className="flex items-center justify-center rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="https://review.coreboot.org/"
            >
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">Gerrit</span>
            </Link>
            <Link
              className="flex items-center justify-center rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="https://fosstodon.org/@coreboot"
            >
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Mastodon</span>
            </Link>
            <Link
              className="flex items-center justify-center rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="https://slack.osfw.dev/"
            >
              <DiscIcon className="h-6 w-6" />
              <span className="sr-only">Slack</span>
            </Link>
            <Link
              className="flex items-center justify-center rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="https://www.reddit.com/r/coreboot/"
            >
              <DiscIcon className="h-6 w-6" />
              <span className="sr-only">Reddit</span>
            </Link>
            <Link
              className="flex items-center justify-center rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="https://discord.com/invite/JqT8NM5Zbg"
            >
              <DiscIcon className="h-6 w-6" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              className="flex items-center justify-center rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="ircs://irc.libera.chat/#coreboot"
            >
              <MailIcon className="h-6 w-6" />
              <span className="sr-only">IRC</span>
            </Link>
            <Link
              className="flex items-center justify-center rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="mailto:coreboot@coreboot.org"
            >
              <MailIcon className="h-6 w-6" />
              <span className="sr-only">Mailing List</span>
            </Link>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-bold">Upcoming Events</h3>
            <div className="grid gap-2">
              <div className="flex items-center justify-between rounded-md bg-white px-4 py-2 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    Open-Source Firmware Conference 2024
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    September 03-05, 2023 - Bochum, Germany
                  </p>
                </div>
                <a
                  href="https://www.osfc.io/"
                  className={cn(buttonVariants({ variant: "link" }))}
                >
                  Learn More
                </a>
              </div>
              <div className="flex items-center justify-between rounded-md bg-white px-4 py-2 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">FOSSY 2024</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    August 01-04, 2024 - Portland, OR
                  </p>
                </div>
                <a
                  href="https://sfconservancy.org/fossy/"
                  className={cn(buttonVariants({ variant: "link" }))}
                >
                  Learn More
                </a>
              </div>

              <div className="flex items-center justify-between rounded-md bg-white px-4 py-2 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">FrOSCon 19</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    August 17-18, 2024 - Sankt Augustin, Germany
                  </p>
                </div>
                <a
                  href="https://froscon.org/"
                  className={cn(buttonVariants({ variant: "link" }))}
                >
                  Learn More
                </a>
              </div>

              <div className="flex items-center justify-between rounded-md bg-white px-4 py-2 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    38th Chaos Communication Congress
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    December 27-30, 2024 - Hamburg, Germany
                  </p>
                </div>
                <a
                  href="https://events.ccc.de/congress/2024/"
                  className={cn(buttonVariants({ variant: "link" }))}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CpuIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function DiscIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );

  function SlackIcon(props: SVGProps<SVGSVGElement>) {
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
        <rect width="3" height="8" x="13" y="2" rx="1.5" />
        <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
        <rect width="3" height="8" x="8" y="14" rx="1.5" />
        <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
        <rect width="8" height="3" x="14" y="13" rx="1.5" />
        <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
        <rect width="8" height="3" x="2" y="8" rx="1.5" />
        <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
      </svg>
    );
  }
}
