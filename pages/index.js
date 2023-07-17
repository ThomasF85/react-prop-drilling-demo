import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({ countAverage, countSum, dragonCount }) {
  return (
    <>
      <CounterStats
        countAverage={countAverage}
        countSum={countSum}
        dragonCount={dragonCount}
      />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
