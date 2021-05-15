import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index App111111111</h1>
      <Link to={`/page1`}>page1</Link>
      <br />
      <Link to={`/page2`}>page2</Link>
    </div>
  );
}
