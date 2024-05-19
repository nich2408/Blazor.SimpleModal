export let modalEventsJsHelperRef;

export function displayModal(id) {
    // https://getbootstrap.com/docs/4.0/components/modal/#events
    $(id).on('hidden.bs.modal', function (e) {
        console.log(e);
        // Invokes the method stored in dotnet runtime.
        modalEventsJsHelperRef.invokeMethodAsync('ModalClosedAsync')
            .then(() => {
                console.log("[interop] Invoked ModalClosedAsync");
            });
    })
    // https://getbootstrap.com/docs/4.0/components/modal/#events
    $(id).modal('show');
}

// Initializes the helper reference required to interop with dotnet.
export function initializeModalEventsJsHelper(helperRef) {
    modalEventsJsHelperRef = helperRef;
}