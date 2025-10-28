import { useEffect, useState } from "react";

interface UsePortalContainerOptions {
  /** Maximum number of attempts to find the element (default: 100) */
  maxAttempts?: number
  /** Whether to log a warning if element is not found (default: true) */
  logWarning?: boolean
}

/**
 * Hook to find and return a DOM element for portal rendering.
 * Useful when the target container might not be immediately available in the DOM.
 *
 * @param selector - CSS selector string to find the target element
 * @param options - Configuration options
 * @returns The found HTMLElement or null if not found
 *
 * @example
 * ```tsx
 * const container = usePortalContainer("[data-slot='sidebar-topbar']");
 *
 * return (
 *   <>
 *     {container && (
 *       <Portal container={container}>
 *         <div>Portal content</div>
 *       </Portal>
 *     )}
 *   </>
 * );
 * ```
 */
export function usePortalContainer(
  selector: string,
  options: UsePortalContainerOptions = {},
): HTMLElement | null {
  const { maxAttempts = 100, logWarning = true } = options;
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let attempts = 0;
    let animationFrameId: number;

    const findElement = () => {
      const element = document.querySelector(selector);

      if (element) {
        setContainer(element as HTMLElement);
        return; // Stop searching once found
      }

      attempts++;

      if (attempts < maxAttempts) {
        // If not found and under max attempts, try again in the next frame
        animationFrameId = requestAnimationFrame(findElement);
      }
      else if (logWarning) {
        // If max attempts reached, log warning and stop
        console.warn(`Could not find element with selector "${selector}" after ${maxAttempts} attempts`);
      }
    };

    findElement();

    // Cleanup function to cancel any pending animation frame
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [selector, maxAttempts, logWarning]);

  return container;
}
