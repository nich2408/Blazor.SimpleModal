using Microsoft.JSInterop;

namespace Blazor.SimpleModal
{
    /// <summary>
    /// Helper class for handling modal events from Javascript.
    /// </summary>
    public class ModalEventsJsHelper
    {
        public event EventHandler? OnModalClosed;

        /// <summary>
        /// This method will be invoked from Javascript interop when the modal is closed.
        /// </summary>
        /// <returns></returns>
        [JSInvokable(nameof(ModalClosedAsync))]
        public Task ModalClosedAsync()
        {
            OnModalClosed?.Invoke(this, EventArgs.Empty);
            return Task.CompletedTask;
        }
    }
}
