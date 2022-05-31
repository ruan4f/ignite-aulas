import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

// getServerSideProps (SSR)
// getStaticProps (SSG)
// API routes

export function SubscribeButton({priceId} : SubscribeButtonProps) {
  const { data: session } = useSession();
  
  function handleSubscribe() {
    if(!session){
      signIn('github');
      return;
    }

    
  }

  return (
    <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe Now
    </button>
  );
}
