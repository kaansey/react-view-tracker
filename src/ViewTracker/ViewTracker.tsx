import React, { useEffect, useRef } from 'react'

interface ViewTrackerProps {
  children: JSX.Element
  onShow?(entry: IntersectionObserverEntry): void
  onHide?(entry: IntersectionObserverEntry): void
  onStartObserving?(conatiner: any): void
  onStopObserving?(conatiner: any): void
  setRootContainer?(): any
  once?: boolean
  visiblePercentage?: number | Array<number>
  offset?: {
    left: number
    right: number
    top: number
    bottom: number
  }
}

const ViewTracker: React.FC<ViewTrackerProps> = props => {
  let observer: any = null
  const containerRef = useRef(null)

  const startWatching = (): void => {
    props.onStartObserving(containerRef)
    if (containerRef) observer.observe(containerRef.current)
  }

  const stopWatching = (): void => {
    props.onStopObserving(containerRef)
    if (containerRef) observer.unobserve(containerRef.current)
  }

  const onIntersect: IntersectionObserverCallback = entries => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        props.onShow(entry)
        if (props.once) {
          stopWatching()
        }
      } else {
        props.onHide(entry)
      }
    })
  }

  const init = (): void => {
    const { visiblePercentage: threshold, offset } = props
    let root = null

    if (props.setRootContainer) {
      root = props.setRootContainer()
    }

    const rootMargin = `${offset.top}px ${offset.right}px ${offset.bottom}px ${offset.left}px`
    observer = new IntersectionObserver(onIntersect, {
      root,
      threshold,
      rootMargin,
    })
  }

  useEffect(() => {
    init()
    startWatching()

    return () => {
      stopWatching()
    }
  }, [])

  return <div ref={containerRef}>{props.children}</div>
}

ViewTracker.defaultProps = {
  onShow: () => void 0,
  onHide: () => void 0,
  onStartObserving: () => void 0,
  onStopObserving: () => void 0,
  once: false,
  offset: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  visiblePercentage: 1,
}

export default React.memo(ViewTracker)
