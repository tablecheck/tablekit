/* eslint-disable @typescript-eslint/naming-convention */
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

const defaultRootPath = 'https://tablecheck.com/en/join';
export const defaultNavigationLists = [
  {
    _uid: 'features',
    title: 'Features',
    items: [
      {
        _uid: 'feature-1',
        label: 'Feature 1',
        value: `${defaultRootPath}/features/first/`,
        isRouterLink: false
      },
      {
        _uid: 'feature-2',
        label: 'Feature 2',
        value: `${defaultRootPath}/features/second/`,
        isRouterLink: false
      },
      {
        _uid: 'feature-3',
        label: 'Feature 3',
        value: `${defaultRootPath}/features/third/`,
        isRouterLink: false
      },
      {
        _uid: 'feature-4',
        label: 'Feature 4',
        value: `${defaultRootPath}/features/fourth/`,
        isRouterLink: false
      }
    ]
  },
  {
    _uid: 'our-clients',
    title: 'Our Clients',
    items: [
      {
        _uid: 'client-1',
        label: 'Client 1',
        value: `${defaultRootPath}/our-clients/first/`,
        isRouterLink: false
      },
      {
        _uid: 'client-2',
        label: 'Client 2',
        value: `${defaultRootPath}/our-clients/second/`,
        isRouterLink: false
      },
      {
        _uid: 'client-3',
        label: 'Client 3',
        value: `${defaultRootPath}/our-clients/third/`,
        isRouterLink: false
      }
    ]
  },
  {
    _uid: 'resources',
    title: 'Resources',
    items: [
      {
        _uid: 'blog',
        label: 'Blog',
        value: `${defaultRootPath}/blog/`,
        isRouterLink: false
      },
      {
        _uid: 'case-studies',
        label: 'Case Studies',
        value: `${defaultRootPath}/case-studies/`,
        isRouterLink: false
      }
    ]
  },
  {
    _uid: 'company',
    title: 'Company',
    items: [
      {
        _uid: 'about-us',
        label: 'About Us',
        value: `${defaultRootPath}/company/`,
        isRouterLink: false
      },
      {
        _uid: 'team',
        label: 'Team',
        value: `${defaultRootPath}/team/`,
        isRouterLink: false
      },
      {
        _uid: 'jobs',
        label: 'Jobs',
        value: `${defaultRootPath}/jobs/`,
        isRouterLink: false
      },
      {
        _uid: 'press',
        label: 'Press',
        value: `${defaultRootPath}/press/`,
        isRouterLink: false
      },
      {
        _uid: 'contact',
        label: 'Contact',
        value: `${defaultRootPath}/contact/`,
        isRouterLink: false
      }
    ]
  }
];

export const defaultActionButtons = [
  {
    _uid: 'find-restaurants',
    label: 'Find Something',
    value: 'https://tablecheck.com/en',
    isRouterLink: false
  },
  {
    _uid: 'support',
    label: 'Support Me',
    value: 'https://tablesolution.zendesk.com/hc/en-us',
    isRouterLink: false
  }
];

// SVG to React component: https://react-svgr.com/playground/
export const defaultSocialLinks = [
  {
    title: 'Join the club',
    _uid: 'social-links',
    items: [
      {
        _uid: 'facebook',
        icon: faFacebook,
        value: 'https://facebook.com/tablecheck'
      },
      {
        _uid: 'instagram',
        icon: faInstagram,
        value: 'https://instagram.com/tablesolution'
      },
      {
        _uid: 'twitter',
        icon: faTwitter,
        value: 'https://twitter.com/tablesolution'
      }
    ]
  }
];

export const defaultPolicyRows = [
  {
    _uid: 'policies',
    items: [
      {
        _uid: 'terms-of-service',
        label: 'Terms of Service',
        value: `${defaultRootPath}/terms/`,
        isRouterLink: false
      },
      {
        _uid: 'privacy-policy',
        label: 'Privacy Policy',
        value: `${defaultRootPath}/policy/privacy/`,
        isRouterLink: false
      },
      {
        _uid: 'payment-policy',
        label: 'Payment Policy',
        value: `${defaultRootPath}/policy/payment/`,
        isRouterLink: false
      }
    ]
  }
];
/* eslint-enable @typescript-eslint/naming-convention */
