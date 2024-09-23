'use client';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export function ContainerQueryDemo() {
  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={30} minSize={20}>
        <div className={clsx(styles.cardContainer, 'resize')}>
          <div className={clsx(styles.card, 'bg-white border rounded-lg p-4')}>
            <img
              src="/posts/2024-09-23-future-css-container-queries/placeholder.jpeg"
              alt="Sample Image"
              className="object-cover w-full h-32 rounded-lg m-0 p-0"
            />
            <div className="content">
              <h2 className="m-0 p-0">Card Title</h2>
              <p className="m-0 p-0 text-base">
                This is some sample text to illustrate the card component.
              </p>
            </div>
          </div>
        </div>
      </Panel>
      <PanelResizeHandle className="flex items-center">
        <svg width="18" height="18" viewBox="0 0 15 15" fill="none">
          <path
            d="M4.81812 4.68161C4.99386 4.85734 4.99386 5.14227 4.81812 5.318L3.08632 7.0498H11.9135L10.1817 5.318C10.006 5.14227 10.006 4.85734 10.1817 4.68161C10.3575 4.50587 10.6424 4.50587 10.8181 4.68161L13.3181 7.18161C13.4939 7.35734 13.4939 7.64227 13.3181 7.818L10.8181 10.318C10.6424 10.4937 10.3575 10.4937 10.1817 10.318C10.006 10.1423 10.006 9.85734 10.1817 9.68161L11.9135 7.9498H3.08632L4.81812 9.68161C4.99386 9.85734 4.99386 10.1423 4.81812 10.318C4.64239 10.4937 4.35746 10.4937 4.18173 10.318L1.68173 7.818C1.50599 7.64227 1.50599 7.35734 1.68173 7.18161L4.18173 4.68161C4.35746 4.50587 4.64239 4.50587 4.81812 4.68161Z"
            fill="currentColor"
          ></path>
        </svg>
      </PanelResizeHandle>
      <Panel defaultSize={30} minSize={0} />
    </PanelGroup>
  );
}
