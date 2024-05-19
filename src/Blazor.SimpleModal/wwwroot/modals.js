export function displayModal(id) {
    // https://getbootstrap.com/docs/4.0/components/modal/#events
    $(id).modal('show');
}

export function initializeModalEvents(id, modalEventsJsHelperRef) {
    // https://getbootstrap.com/docs/4.0/components/modal/#events
    $(id).on('hidden.bs.modal', function (e) {
        console.log(e);
        // Invokes the method stored in dotnet runtime.
        modalEventsJsHelperRef.invokeMethodAsync('ModalClosedAsync')
            .then(() => {
                console.log("[interop] Invoked ModalClosedAsync");
            });
    });
}