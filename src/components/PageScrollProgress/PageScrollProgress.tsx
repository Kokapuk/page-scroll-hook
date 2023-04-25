import usePageScrollProgress from '../../hooks/usePageScrollProgress';
import styles from './PageScrollProgress.module.css';

const PageScrollProgress = () => {
  const scrollProgress = usePageScrollProgress();

  return <div style={{ width: `${scrollProgress * 100}%` }} className={styles['progress-bar']} />;
};

export default PageScrollProgress;
